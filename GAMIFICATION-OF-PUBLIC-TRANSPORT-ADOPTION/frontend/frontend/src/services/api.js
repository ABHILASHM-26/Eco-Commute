export const fetchStats = async () => {
    const response = await fetch('/api/dashboard/stats/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  };
  