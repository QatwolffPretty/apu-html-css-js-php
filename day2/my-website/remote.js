function getUsers()
{

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log("This is from my remote call example page.")
            console.log(data);
        }
    };
    
    xhr.send();
}



function createPost()
{

    var xhr = new XMLHttpRequest();
    var data = {
        title: 'This is my title of the Post',
        body: 'This is the body of my post',
        userId: 1
    };
    
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 201) { // 201 for created
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    
    xhr.send(JSON.stringify(data));

}

function updatePost()
{

    var xhr = new XMLHttpRequest();
    var data = {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
    };
    
    xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
        }
    };
    
    xhr.send(JSON.stringify(data));

}


function deletePost()
{

    var xhr = new XMLHttpRequest();

xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("Successfully deleted!");
    }
};

xhr.send();
}