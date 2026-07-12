import { PageShell } from '@/components/page-shell';
import { SectionTitle } from '@/components/section-title';
import { CharacterGrid } from '@/components/character-grid';
import { characters } from '@/data/characters';

export default function CharactersPage() {
  return (
    <PageShell
      title="Character Library"
      description="Browse and select from our collection of AI-powered characters."
    >
      <SectionTitle
        title="Available Characters"
        subtitle="Each character brings unique expertise and perspectives"
      />
      <div className="mt-8">
        <CharacterGrid characters={characters} />
      </div>
    </PageShell>
  );
}
