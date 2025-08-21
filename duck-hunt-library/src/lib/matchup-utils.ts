interface MatchupResponse {
  contentHtml: string;
  error?: string;
}

export async function getMatchupContent(id: string) {
  try {
    // For debugging
    console.log(`Fetching matchup content for id: ${id}`);
    
    // Get the base URL from the window location in the browser
    // or default to http://localhost:3000 for server-side rendering
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/matchups?id=${encodeURIComponent(id)}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API response not OK: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Failed to fetch matchup content: ${response.statusText}`);
    }
    
    const data = await response.json() as MatchupResponse;
    if (data.error) {
      console.error('API returned error:', data.error);
      throw new Error(data.error);
    }

    if (!data.contentHtml) {
      console.error('API response missing contentHtml:', data);
      throw new Error('Invalid API response format');
    }

    return {
      contentHtml: data.contentHtml
    };
  } catch (error) {
    console.error('Error loading matchup content:', error);
    return {
      contentHtml: '<p>Error loading matchup content. Please check the console for details.</p>'
    };
  }
}
