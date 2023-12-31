import eetch from 'eetch/eetch';

export const createGround = async ({ accessToken, refreshToken, name, repoId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/repo/${repoId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ name }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const getGround = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const editGround = async ({ accessToken, refreshToken, groundId, name, focusTime, activeTime }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ name, focusTime: Number(focusTime), activeTime: Number(activeTime) }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const createDocument = async ({ accessToken, refreshToken, groundId, type, parentId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/create`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ parentId, sprintId }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const listDocument = async ({ accessToken, refreshToken, groundId, type, parentId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${type === 'target' ? '' : parentId + '/'}list`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const linkDocument = async ({ accessToken, refreshToken, groundId, type, parentId, id }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}/connect`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ parentId }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const treeDocument = async ({ accessToken, refreshToken, type, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/total`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const parentsList = async ({ accessToken, refreshToken, type, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/list`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const detailDocument = async ({ accessToken, refreshToken, groundId, type, id }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const editDocument = async ({ accessToken, refreshToken, groundId, type, id, title, content }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ title, content }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const statusDocument = async ({ accessToken, refreshToken, groundId, type, id, status }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}/status`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ status }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const senderDocument = async ({ accessToken, refreshToken, groundId, id, sender }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/request/${id}/sender`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ sendUserId: sender }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const receiverDocument = async ({ accessToken, refreshToken, groundId, id, receiver }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/request/${id}/receiver`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ receiveUserId: receiver }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const commentDocument = async ({ accessToken, refreshToken, groundId, id, comment }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/request/${id}/comment`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ comment }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const timeDocument = async ({ accessToken, refreshToken, groundId, type, id, focusTime, activeTime }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}/time`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ focusTime: Number(focusTime), activeTime: Number(activeTime) }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const titleDocument = async ({ accessToken, refreshToken, groundId, type, id, title }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}/title`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ title }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const deleteDocument = async ({ accessToken, refreshToken, groundId, type, id }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/${type}/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const groundUsers = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/users`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const groundUser = async ({ accessToken, refreshToken, groundId, email }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/user/${email}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const groundOwn = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/is-owner`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const groundInvite = async ({ accessToken, refreshToken, groundId, githubId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/invite/${githubId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const groundOut = async ({ accessToken, refreshToken, groundId, githubId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/owner/user/${githubId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const createSprint = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const editSprint = async ({ accessToken, refreshToken, groundId, sprintId, goal, name }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint/${sprintId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ goal, name }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const deleteSprint = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint/${sprintId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const listSprint = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const listRequest = async ({ accessToken, refreshToken, groundId, filter }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/request/${filter}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const sprintIssues = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/issue/${sprintId}/sprint`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const recentSprint = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint/recent`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const startSprint = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint/${sprintId}/start`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const completeSprint = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/sprint/${sprintId}/complete`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const connectSprint = async ({ accessToken, refreshToken, groundId, sprintId, issueId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/issue/${issueId}/sprint`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ sprintId }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const multiConnectSprint = async ({ accessToken, refreshToken, groundId, sprintId, issueList }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/issue/multi-sprint`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ sprintId, issueList }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const activeCount = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/active-count/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const activeTime = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/active-time/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const burnDown = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/burn-down/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const focusCount = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/focus-count/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const focusTime = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/focus-time/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const totalCount = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/total-count/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const totalTime = async ({ accessToken, refreshToken, groundId, sprintId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/total-time/${sprintId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const issueToggle = async ({ accessToken, refreshToken, groundId, issueId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/issue/${issueId}/status/toggle`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const generateToken = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/token/`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const recentLog = async ({ groundId, page }) => {
  const url = `https://k9d103a.p.ssafy.io:10000/log?page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      groundId,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} 에러`);
  }

  return res.json();
};

export const keywordLog = async ({ groundId, keyword, page }) => {
  const url = `https://k9d103a.p.ssafy.io:10000/log/keyword/${keyword}?page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      groundId,
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} 에러`);
  }

  return res.json();
};

export const regexLog = async ({ groundId, regex, page }) => {
  const url = `https://k9d103a.p.ssafy.io:10000/log/regexp?page=${page}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      groundId,
      regexp: encodeURIComponent(regex),
    },
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} 에러`);
  }

  return res.json();
};

export const gptSolution = async ({ groundId, question }) => {
  const url = `https://k9d103a.p.ssafy.io:10000/chat/analyze`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      groundId,
    },
    body: JSON.stringify({ question }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} 에러`);
  }

  return res.json();
};

export const addFilter = async ({ accessToken, refreshToken, groundId, type, value }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/log-env`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({ type, value }),
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const getFilter = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/log-env`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const removeFilter = async ({ accessToken, refreshToken, groundId, id }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/log-env/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};

export const focusAverage = async ({ accessToken, refreshToken, groundId }) => {
  const url = `https://k9d103.p.ssafy.io:8001/ground/${groundId}/chart/avg/focus`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
  };

  const res = await eetch(url, options, refreshToken);

  return res.json();
};
