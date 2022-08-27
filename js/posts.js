function posts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postArticle = document.createElement('article');
        postArticle.classList.add('article-style')
        console.log(post);
        postArticle.innerHTML = `
        <h4>Id: ${post.userId}</h4>
        <h2>Title: ${post.title}</h2>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(postArticle)
    }


}

posts()