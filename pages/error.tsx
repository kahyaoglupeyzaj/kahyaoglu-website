'use client';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div>
            <h2>Birşeyler Yanlış gitti</h2>
            <button onClick={() => reset()}>Tekrar deneyin</button>
        </div>
    );
}

