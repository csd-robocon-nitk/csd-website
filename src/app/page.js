
export default async function Home() {
  try {
    const token = '336f4ffc88cf379ac3c3220b010291361737e1b9843d88f8b7e472c87381c866c51f38c184a1f73f5e9ebe279f632cb6652ee683b2fc3e9ecd546b39811a8b09ab7938134ba78d25f87f1091a5a35b164eb321fb6951e6e51770e939345885694fef286770be68b02b10bd38ea44c868beda3d0f6af44b9ac4f2464be39f9000'; // Assuming your token variable is named TOKEN in your environment file

    if (!token) {
      throw new Error('Token not found in environment variables.');
    }

    const res = await fetch(`http://127.0.0.1:1337/api/articles`, {
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
    console.log(articles_data)


    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>
          <div>
            <h1>Articles</h1>
            <ul>
              {articles_data.map(article=>(
                <li key={articles.id}>
                  <h3>
                    {article.article_name}
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
