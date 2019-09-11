import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const USER = {
  login: "HunterTParks",
  id: 22444161,
  node_id: "MDQ6VXNlcjIyNDQ0MTYx",
  avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/HunterTParks",
  html_url: "https://github.com/HunterTParks",
  followers_url: "https://api.github.com/users/HunterTParks/followers",
  following_url:
    "https://api.github.com/users/HunterTParks/following{/other_user}",
  gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/HunterTParks/subscriptions",
  organizations_url: "https://api.github.com/users/HunterTParks/orgs",
  repos_url: "https://api.github.com/users/HunterTParks/repos",
  events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/HunterTParks/received_events",
  type: "User",
  site_admin: false,
  name: "Hunter Parks",
  company: null,
  blog: "",
  location: "Portland",
  email: null,
  hireable: true,
  bio:
    "Back-end web developer currently using Ruby on Rails, Javascript, and C#.\r\nHobbies include building computers, creating music, and tinkering Raspberry Pi's.",
  public_repos: 59,
  public_gists: 0,
  followers: 15,
  following: 18,
  created_at: "2016-09-26T09:07:46Z",
  updated_at: "2019-08-05T06:10:08Z"
};
const USER_REPOS = [
  {
    id: 95591277,
    node_id: "MDEwOlJlcG9zaXRvcnk5NTU5MTI3Nw==",
    name: "alarm-clock-with-API",
    full_name: "HunterTParks/alarm-clock-with-API",
    private: false,
    owner: {
      login: "HunterTParks",
      id: 22444161,
      node_id: "MDQ6VXNlcjIyNDQ0MTYx",
      avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HunterTParks",
      html_url: "https://github.com/HunterTParks",
      followers_url: "https://api.github.com/users/HunterTParks/followers",
      following_url:
        "https://api.github.com/users/HunterTParks/following{/other_user}",
      gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/HunterTParks/subscriptions",
      organizations_url: "https://api.github.com/users/HunterTParks/orgs",
      repos_url: "https://api.github.com/users/HunterTParks/repos",
      events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HunterTParks/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/HunterTParks/alarm-clock-with-API",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/HunterTParks/alarm-clock-with-API",
    forks_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/forks",
    keys_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/teams",
    hooks_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/hooks",
    issue_events_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/events",
    assignees_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/tags",
    blobs_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/languages",
    stargazers_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/stargazers",
    contributors_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/contributors",
    subscribers_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/subscribers",
    subscription_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/subscription",
    commits_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/merges",
    archive_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/downloads",
    issues_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/labels{/name}",
    releases_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/HunterTParks/alarm-clock-with-API/deployments",
    created_at: "2017-06-27T19:01:54Z",
    updated_at: "2017-06-27T19:02:15Z",
    pushed_at: "2017-06-27T23:04:52Z",
    git_url: "git://github.com/HunterTParks/alarm-clock-with-API.git",
    ssh_url: "git@github.com:HunterTParks/alarm-clock-with-API.git",
    clone_url: "https://github.com/HunterTParks/alarm-clock-with-API.git",
    svn_url: "https://github.com/HunterTParks/alarm-clock-with-API",
    homepage: null,
    size: 72,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 97254702,
    node_id: "MDEwOlJlcG9zaXRvcnk5NzI1NDcwMg==",
    name: "Angular-Computer-club",
    full_name: "HunterTParks/Angular-Computer-club",
    private: false,
    owner: {
      login: "HunterTParks",
      id: 22444161,
      node_id: "MDQ6VXNlcjIyNDQ0MTYx",
      avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HunterTParks",
      html_url: "https://github.com/HunterTParks",
      followers_url: "https://api.github.com/users/HunterTParks/followers",
      following_url:
        "https://api.github.com/users/HunterTParks/following{/other_user}",
      gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/HunterTParks/subscriptions",
      organizations_url: "https://api.github.com/users/HunterTParks/orgs",
      repos_url: "https://api.github.com/users/HunterTParks/repos",
      events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HunterTParks/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/HunterTParks/Angular-Computer-club",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/HunterTParks/Angular-Computer-club",
    forks_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/forks",
    keys_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/teams",
    hooks_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/hooks",
    issue_events_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/events",
    assignees_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/tags",
    blobs_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/languages",
    stargazers_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/stargazers",
    contributors_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/contributors",
    subscribers_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/subscribers",
    subscription_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/subscription",
    commits_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/merges",
    archive_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/downloads",
    issues_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/labels{/name}",
    releases_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/HunterTParks/Angular-Computer-club/deployments",
    created_at: "2017-07-14T16:46:01Z",
    updated_at: "2017-07-14T16:46:21Z",
    pushed_at: "2017-07-14T23:37:31Z",
    git_url: "git://github.com/HunterTParks/Angular-Computer-club.git",
    ssh_url: "git@github.com:HunterTParks/Angular-Computer-club.git",
    clone_url: "https://github.com/HunterTParks/Angular-Computer-club.git",
    svn_url: "https://github.com/HunterTParks/Angular-Computer-club",
    homepage: null,
    size: 785,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 96575956,
    node_id: "MDEwOlJlcG9zaXRvcnk5NjU3NTk1Ng==",
    name: "Angular-Zoo-Project",
    full_name: "HunterTParks/Angular-Zoo-Project",
    private: false,
    owner: {
      login: "HunterTParks",
      id: 22444161,
      node_id: "MDQ6VXNlcjIyNDQ0MTYx",
      avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HunterTParks",
      html_url: "https://github.com/HunterTParks",
      followers_url: "https://api.github.com/users/HunterTParks/followers",
      following_url:
        "https://api.github.com/users/HunterTParks/following{/other_user}",
      gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/HunterTParks/subscriptions",
      organizations_url: "https://api.github.com/users/HunterTParks/orgs",
      repos_url: "https://api.github.com/users/HunterTParks/repos",
      events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HunterTParks/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/HunterTParks/Angular-Zoo-Project",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project",
    forks_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/forks",
    keys_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/teams",
    hooks_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/hooks",
    issue_events_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/events",
    assignees_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/tags",
    blobs_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/languages",
    stargazers_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/stargazers",
    contributors_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/contributors",
    subscribers_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/subscribers",
    subscription_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/subscription",
    commits_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/merges",
    archive_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/downloads",
    issues_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/HunterTParks/Angular-Zoo-Project/deployments",
    created_at: "2017-07-07T20:54:47Z",
    updated_at: "2017-07-07T20:55:09Z",
    pushed_at: "2017-07-07T23:40:40Z",
    git_url: "git://github.com/HunterTParks/Angular-Zoo-Project.git",
    ssh_url: "git@github.com:HunterTParks/Angular-Zoo-Project.git",
    clone_url: "https://github.com/HunterTParks/Angular-Zoo-Project.git",
    svn_url: "https://github.com/HunterTParks/Angular-Zoo-Project",
    homepage: null,
    size: 21,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 99600590,
    node_id: "MDEwOlJlcG9zaXRvcnk5OTYwMDU5MA==",
    name: "ASP.NET-Authentication-Help",
    full_name: "HunterTParks/ASP.NET-Authentication-Help",
    private: false,
    owner: {
      login: "HunterTParks",
      id: 22444161,
      node_id: "MDQ6VXNlcjIyNDQ0MTYx",
      avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HunterTParks",
      html_url: "https://github.com/HunterTParks",
      followers_url: "https://api.github.com/users/HunterTParks/followers",
      following_url:
        "https://api.github.com/users/HunterTParks/following{/other_user}",
      gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/HunterTParks/subscriptions",
      organizations_url: "https://api.github.com/users/HunterTParks/orgs",
      repos_url: "https://api.github.com/users/HunterTParks/repos",
      events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HunterTParks/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/HunterTParks/ASP.NET-Authentication-Help",
    description: null,
    fork: false,
    url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help",
    forks_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/forks",
    keys_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/teams",
    hooks_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/hooks",
    issue_events_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/events",
    assignees_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/tags",
    blobs_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/languages",
    stargazers_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/stargazers",
    contributors_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/contributors",
    subscribers_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/subscribers",
    subscription_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/subscription",
    commits_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/merges",
    archive_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/downloads",
    issues_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/labels{/name}",
    releases_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-Authentication-Help/deployments",
    created_at: "2017-08-07T17:01:24Z",
    updated_at: "2017-08-07T17:01:56Z",
    pushed_at: "2017-08-07T17:01:55Z",
    git_url: "git://github.com/HunterTParks/ASP.NET-Authentication-Help.git",
    ssh_url: "git@github.com:HunterTParks/ASP.NET-Authentication-Help.git",
    clone_url:
      "https://github.com/HunterTParks/ASP.NET-Authentication-Help.git",
    svn_url: "https://github.com/HunterTParks/ASP.NET-Authentication-Help",
    homepage: null,
    size: 164,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 99834287,
    node_id: "MDEwOlJlcG9zaXRvcnk5OTgzNDI4Nw==",
    name: "ASP.NET-FlickrClone",
    full_name: "HunterTParks/ASP.NET-FlickrClone",
    private: false,
    owner: {
      login: "HunterTParks",
      id: 22444161,
      node_id: "MDQ6VXNlcjIyNDQ0MTYx",
      avatar_url: "https://avatars3.githubusercontent.com/u/22444161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HunterTParks",
      html_url: "https://github.com/HunterTParks",
      followers_url: "https://api.github.com/users/HunterTParks/followers",
      following_url:
        "https://api.github.com/users/HunterTParks/following{/other_user}",
      gists_url: "https://api.github.com/users/HunterTParks/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/HunterTParks/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/HunterTParks/subscriptions",
      organizations_url: "https://api.github.com/users/HunterTParks/orgs",
      repos_url: "https://api.github.com/users/HunterTParks/repos",
      events_url: "https://api.github.com/users/HunterTParks/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HunterTParks/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/HunterTParks/ASP.NET-FlickrClone",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone",
    forks_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/forks",
    keys_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/teams",
    hooks_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/hooks",
    issue_events_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/events",
    assignees_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/tags",
    blobs_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/languages",
    stargazers_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/stargazers",
    contributors_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/contributors",
    subscribers_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/subscribers",
    subscription_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/subscription",
    commits_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/merges",
    archive_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/downloads",
    issues_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/labels{/name}",
    releases_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/HunterTParks/ASP.NET-FlickrClone/deployments",
    created_at: "2017-08-09T17:19:09Z",
    updated_at: "2017-08-09T17:19:33Z",
    pushed_at: "2017-08-09T17:51:33Z",
    git_url: "git://github.com/HunterTParks/ASP.NET-FlickrClone.git",
    ssh_url: "git@github.com:HunterTParks/ASP.NET-FlickrClone.git",
    clone_url: "https://github.com/HunterTParks/ASP.NET-FlickrClone.git",
    svn_url: "https://github.com/HunterTParks/ASP.NET-FlickrClone",
    homepage: null,
    size: 162,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C#",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

function Card(props) {
  const onHoverStyling = {};

  const useCallback = () => {
    console.log("Callback");
    props.callback(props.cardPosition);
  };

  return (
    <div className={"card " + props.styleClass} onMouseEnter={useCallback}>
      {props.name}
    </div>
  );
}

function CardContainer(props) {
  const [cardHovered, setCardHovered] = React.useState(0);

  const getReposOfUser = user => {
    /* Add Functionality for retrieving specified User Repos from Github*/
    return USER_REPOS;
  };
  const setCardHoveredCallback = num => {
    console.log("position", num);
    setCardHovered(num);
  };

  const leftCardStyle = "left-card-style";
  const rightCardStyle = "right-card-style";

  const repos = getReposOfUser("huntertparks");

  return (
    <div className="card-container">
      {repos.map((item, index) => {
        return (
          <div>
            <Card
              {...item}
              key={index}
              cardPosition={index}
              callback={setCardHoveredCallback}
              styleClass={
                index - 1 < cardHovered ? leftCardStyle : rightCardStyle
              }
            />
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [cardCount, setCardCount] = React.useState(5);

  return (
    <div className="App">
      {console.log("cardCount", cardCount)}
      <CardContainer range={cardCount} />
    </div>
  );
}

const utils = {
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  random: (min, max) => min + Math.floor(max * Math.random()),
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length)];
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
