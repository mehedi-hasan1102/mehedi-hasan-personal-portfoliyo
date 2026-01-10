"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface Commit {
  message: string;
  url: string;
  date: string;
  repo: string;
}

export default function DashboardPage() {
  const USERNAME = "mehedi-hasan1102";

  const [repos, setRepos] = useState<Repo[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0,
  });

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const profileRes = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const profile = await profileRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`
        );
        const repoData: Repo[] = await repoRes.json();

        const totalStars = repoData.reduce(
          (acc, r) => acc + r.stargazers_count,
          0
        );
        const totalForks = repoData.reduce((acc, r) => acc + r.forks_count, 0);

        const sortedRepos = repoData
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .slice(0, 5);

        const commitPromises = sortedRepos.map(async (repo) => {
          const res = await fetch(
            `https://api.github.com/repos/${USERNAME}/${repo.name}/commits?per_page=2`
          );
          const data = await res.json();
          if (!Array.isArray(data)) return [];

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return data.map((c: any) => ({
            message: c.commit.message,
            url: c.html_url,
            date: c.commit.author.date,
            repo: repo.name,
          }));
        });

        const commitData = (await Promise.all(commitPromises)).flat();

        setStats({
          repos: profile.public_repos,
          stars: totalStars,
          forks: totalForks,
          followers: profile.followers,
        });

        setRepos(sortedRepos);
        setCommits(commitData);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGitHub();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-base-content font-geist max-w-3xl mx-auto pt-1"
    >
      <div className="w-full max-w-3xl mx-auto min-h-screen rounded-lg p-4 bg-base-200 backdrop-blur-sm hover:shadow-primary/10 transition-shadow duration-300">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="my-4 text-start"
        >
          <h2 className="text-3xl">Dashboard</h2>
        </motion.div>

     

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Github Repos", value: stats.repos },
            { label: "Github Stars", value: stats.stars },
            { label: "Github Forks", value: stats.forks },
            { label: "Github Followers", value: stats.followers },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-base-100 p-4 rounded-lg shadow-sm hover:shadow-md  transition-all "
            >
              <p className="text-sm text-base-content/70 mb-2 text-center">{item.label}</p>
              <p className="text-2xl text-center ">{item.value}</p>
            </div>
          ))}
        </div>

 <div className="mb-4" >
  <img src="https://yourinsights.vercel.app/api/insight?username=mehedi-hasan1102&theme=neo_green&graph=true&languages=true&streak=true&stats=true&header=true&summary=true&profile=true" alt="GitHub Insights" />
 
 
</div>
 

 <div><h3 className="text-xl my-3">Consistency & Open-Source Activity</h3>
 <img
            src="https://ghchart.rshah.org/mehedi-hasan1102"
            alt="Mehedi Hasan's GitHub Contribution Graph"
            className="w-full h-auto my-6 bg-base-100 p-4 rounded-lg"
            loading="lazy"
          />
</div>
         
      
       
        {/* Latest Repos */}
        <div className="mb-6">
          <h3 className="text-xl mb-3">Latest Repositories</h3>
          <ul className="space-y-3">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                className="group block p-4 rounded-lg hover:bg-base-100 transition-colors duration-200"
              >
                <div className="flex justify-between items-center ">
                  <span>{repo.name}</span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </div>
                <p className="text-sm text-base-content/80 mt-1">
                  {repo.description || "No description"}
                </p>
                <div className="text-xs mt-2 flex gap-4">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  {repo.language && <span>🧠 {repo.language}</span>}
                </div>
              </a>
            ))}
          </ul>
        </div>

       
        {/* Recent Commits */}
<div>
  <h3 className="text-xl mb-3">Recent Commits</h3>

  {commits.length === 0 ? (
    <div className="bg-base-100 p-4 rounded-lg text-sm text-base-content/70">
      No recent commits found.
    </div>
  ) : (
    <ul className="space-y-3">
      {commits.map((commit, idx) => (
        <a
          key={idx}
          href={commit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 rounded-lg hover:bg-base-100 transition-colors duration-200"
        >
          <div className="flex justify-between items-start gap-3">
            {/* Commit Message */}
            <div className="flex-1 min-w-0">
              <p
                title={commit.message}
                className="text-sm font-medium line-clamp-2 break-words"
              >
                <span className="text-base-content/70">
                  [{commit.repo}]
                </span>{" "}
                {commit.message.split("\n")[0]}
              </p>

              <p className="text-xs text-base-content/60 mt-1">
                {new Date(commit.date).toLocaleString()}
              </p>
            </div>

            {/* Arrow Icon */}
            <motion.span
              className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>
        </a>
      ))}
    </ul>
  )}
</div>

      </div>

    </motion.section>
  );
}
