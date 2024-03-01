
export default async function Home() {
  try {
    const token = process.env.TOKEN;

    if (!token) {
      throw new Error('Token not found in environment variables.');
    }

    const res = await fetch(`${process.env.STRAPI_API_URL}/items?publicationState=preview`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const articles = await res.json();
    console.log(articles);
    const articles_data=articles.data
    console.log(articles_data[0].attributes.rich)


    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          <div>
            <h1>Articles</h1>
            <ul>
              {articles_data.map(article=>(
                <li key={articles.id}>
                  <h3>
                    {article.id}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </h1>
      </main>
    );
  } catch (error) {
    console.error('Error:', error.message);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Error: {error.message}</p>
      </main>
    );
  }
}
