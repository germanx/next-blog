import Card from '@/app/components/Card';

// export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const resp = await fetch('http://localhost:3001/repos');
  // const resp = await fetch('http://localhost:3001/repos', {
  //   cache: 'no-store',
  // });
  const repos = await resp.json();

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <li key={repo.id} className="mb-4">
            <Card className="font-mono h-full">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{repo.title}</div>
                <div>⭐{repo.stargazers_count}</div>
              </div>

              <div>{repo.description}</div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
