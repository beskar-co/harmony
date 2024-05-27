/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Octokit } from '@octokit/rest';

const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error('GITHUB_TOKEN is not set');
}

const octokit = new Octokit({
  auth: githubToken,
});

const owner = 'haydenbleasel';
const repo = 'ultracite';

export const getRepo = async () =>
  octokit.repos.get({
    owner,
    repo,
  });

export const getChangelog = async () =>
  octokit.rest.repos.listReleases({
    owner,
    repo,
    per_page: 100,
  });

export const getReadme = async () => {
  const response = await octokit.rest.repos.getReadme({
    owner,
    repo,
    mediaType: {
      format: 'html',
    },
  });

  return (
    response as unknown as {
      data: string;
    }
  ).data;
};
