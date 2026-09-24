'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  words: string[];           // les textes qui défilent
  typingSpeed?: number;      // ms par lettre à l'écriture
  deletingSpeed?: number;    // ms par lettre à la suppression
  pauseAfterType?: number;   // pause quand le mot est complet
  pauseAfterDelete?: number; // pause avant d'écrire le mot suivant
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseAfterType = 1600,
  pauseAfterDelete = 300,
  className = '',
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && text === current) delay = pauseAfterType;
    if (isDeleting && text === '') delay = pauseAfterDelete;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true); // mot complet → on efface
      } else if (isDeleting && text === '') {
        setIsDeleting(false); // tout effacé → mot suivant
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <span className={className}>
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden>{text}</span>
      <span aria-hidden className="caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] rounded-full bg-current" />
    </span>
  );
}