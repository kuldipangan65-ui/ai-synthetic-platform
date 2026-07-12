import { Card } from './card';

interface Character {
  id: string;
  name: string;
  description: string;
  avatar?: string;
}

interface CharacterGridProps {
  characters: Character[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {characters.map((character) => (
        <Card key={character.id}>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              {character.avatar || character.name[0]}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{character.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{character.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
