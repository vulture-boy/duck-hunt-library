'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { MatchupReference } from '@/lib/matchup-data';

export interface MatchupNavProps {
    previousMatchup: MatchupReference | null;
    nextMatchup: MatchupReference | null;
    title: string;
}

export default function MatchupNav({ previousMatchup, nextMatchup, title }: MatchupNavProps) {
    const router = useRouter();

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'ArrowLeft' && previousMatchup) {
                router.push(`/matchups/${previousMatchup.path}`);
            } else if (event.key === 'ArrowRight' && nextMatchup) {
                router.push(`/matchups/${nextMatchup.path}`);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [previousMatchup, nextMatchup, router]);

    return (
        <div className="matchup-header">
            {previousMatchup && (
                <Link 
                    href={`/matchups/${previousMatchup.path}`}
                    className="nav-arrow"
                    title={previousMatchup.displayName}
                >
                    🞀
                </Link>
            )}
            <h1 className="matchup-title">{title}</h1>
            {nextMatchup && (
                <Link 
                    href={`/matchups/${nextMatchup.path}`}
                    className="nav-arrow"
                    title={nextMatchup.displayName}
                >
                    🞂
                </Link>
            )}
        </div>
    );
}
