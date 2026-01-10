"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface Commit {
  message: string;
  url: string;
  date: string;
  repo: string;
}

interface LanguageData {
  name: string;
  value: number;
  [key: string]: string | number;
}

export default function DashboardPage() {
  const USERNAME = "mehedi-hasan1102";
  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const [repos, setRepos] = useState<Repo[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [stats, setStats] = useState({
    repos: 0,
    stars: 0,
    forks: 0,
    followers: 0,
  });
  const [languagesData, setLanguagesData] = useState<LanguageData[]>([]);

  useEffect(() => {
    const headers: HeadersInit = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

    async function fetchGitHubData() {
      try {
        // Profile
        const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
        if (!profileRes.ok) throw new Error("Failed to fetch profile");
        const profile = await profileRes.json();

        // Repos
        const repoRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`,
          { headers }
        );
        if (!repoRes.ok) throw new Error("Failed to fetch repos");
        const repoData: Repo[] = await repoRes.json();

        // Stats
        const totalStars = repoData.reduce((acc, r) => acc + r.stargazers_count, 0);
        const totalForks = repoData.reduce((acc, r) => acc + r.forks_count, 0);

        // Latest 5 repos
        const latestRepos = repoData
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 5);

        // Latest commit per repo
        const commitPromises = latestRepos.map(async (repo) => {
          const res = await fetch(
            `https://api.github.com/repos/${USERNAME}/${repo.name}/commits?per_page=1`,
            { headers }
          );
          if (!res.ok) return null;
          const data = await res.json();
          if (!Array.isArray(data) || data.length === 0) return null;

          const c = data[0];
          return {
            message: c.commit.message,
            url: c.html_url,
            date: c.commit.author.date,
            repo: repo.name,
          } as Commit;
        });

        const commitResults = (await Promise.all(commitPromises)).filter(
          (c): c is Commit => c !== null
        );

        // Language PieChart
        const langMap: Record<string, number> = {};
        repoData.forEach((r) => {
          if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
        });
        const langArr: LanguageData[] = Object.entries(langMap).map(([name, value]) => ({
          name,
          value,
        }));

        setStats({
          repos: profile.public_repos,
          stars: totalStars,
          forks: totalForks,
          followers: profile.followers,
        });
        setRepos(latestRepos);
        setCommits(commitResults);
        setLanguagesData(langArr);
      } catch (err) {
        console.error(err);
      }
    }

    fetchGitHubData();
  }, [TOKEN]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560", "#FF9F40"];

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
              className="bg-base-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-sm text-base-content/70 mb-2 text-center">
                {item.label}
              </p>
              <p className="text-2xl text-center">{item.value}</p>
            </div>
          ))}
        </div>

        {/* GitHub Insights Image */}
        <div className="mb-4">
          <img
            src={`https://yourinsights.vercel.app/api/insight?username=${USERNAME}&theme=neo_green&graph=true&languages=true&streak=true&stats=true&header=true&summary=true&profile=true`}
            alt="GitHub Insights"
          />
        </div>

        {/* Contribution Graph */}
        <div>
          <h3 className="text-xl my-3">Consistency & Open-Source Activity</h3>
          <img
            src={`https://ghchart.rshah.org/${USERNAME}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto my-6  p-4 rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Language PieChart */}
     
        {languagesData.length > 0 && (
  <div className="my-6 w-full rounded-lg">
    <h3 className="text-xl mb-4 text-start">Languages Used</h3>

    {/* Pie Chart */}
    <div className="w-full h-80 bg-">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={languagesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {languagesData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* Languages Names Below Chart - Centered */}
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {languagesData.map((lang, index) => (
        <div
          key={index}
          className="px-3 py-1 rounded text-sm text-white flex justify-center items-center"
          style={{ backgroundColor: COLORS[index % COLORS.length] }}
        >
          {lang.name}
        </div>
      ))}
    </div>
  </div>
)}


        {/* Latest Repos */}

        <div className="mb-6">
  <h3 className="text-xl mb-3">Latest Repositories</h3>

  {repos.length === 0 ? (
    <div className="bg-base-100 p-4 rounded-lg text-sm text-base-content/70">
      Repositories are Loading !
    </div>
  ) : (
    <ul className="space-y-3">
      {repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 rounded-lg hover:bg-base-100 transition-colors duration-200"
        >
          <div className="flex justify-between items-center">
            <span>{repo.name}</span>
            <motion.span
              className="opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>
          <p className="text-sm text-base-content/80 mt-1 line-clamp-2 break-words">
            {repo.description || "No description"}
          </p>
          <div className="text-xs mt-2 flex gap-4 flex-wrap">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
            {repo.language && <span>🧠 {repo.language}</span>}
          </div>
        </a>
      ))}
    </ul>
  )}
</div>


        {/* Recent Commits */}
        <div>
          <h3 className="text-xl mb-3">Recent Commits</h3>

          {commits.length === 0 ? (
            <div className="bg-base-100 p-4 rounded-lg text-sm text-base-content/70">
              Commits are Loading !
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
