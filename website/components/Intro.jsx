import Link from 'next/link'
import octokit from '../lib/octokit'
import { Button } from '@beskar-labs/gravity/button';

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

export async function Intro() {
  const repo = await octokit.repos.get({
    owner: 'beskar-co',
    repo: 'harmony',
  });

  return (
    <>
      <div>
        <Link href="/" className="text-neutral-500 hover:text-neutral-400 transition-colors">
          @{repo.data.owner.login}/{repo.data.name}
        </Link>
      </div>
      <h1 className="mt-8 font-display text-4xl/tight font-light text-neutral-950">
        {repo.data.description}
      </h1>
      <Button className="mt-8 inline-flex items-center" href={repo.data.html_url}>
        <GitHubIcon className="w-4 h-4 mr-2" />
        View on GitHub
      </Button>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-center gap-x-2 text-[0.8125rem]/6 text-neutral-500">
      Brought to you by{' '}
      <Button variant="link" href="https://twitter.com/haydenbleasel">
        <TwitterIcon className="mr-2 h-4 w-4" />
        @haydenbleasel
      </Button>
    </p>
  )
}
