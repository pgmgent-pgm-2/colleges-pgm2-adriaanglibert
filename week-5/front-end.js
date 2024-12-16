fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: {
        "title": "Mijn post",
        "description": "Mijn post inhoud."
    }
})