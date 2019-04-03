
export const fetchUsers = () => dispatch => {
 	fetch('https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVj30zv8xMYR')
	.then(response => response.json())
	.then(response => dispatch({
		type: 'FETCH_USERS',
		payload: response.result
	}))
}

export const postUser = (user) => dispatch => {
 	fetch('https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVj30zv8xMYR', {
    method: 'post',
    body: JSON.stringify(user)
  })
	.then(response => response.json())
	.then(response => dispatch({
		type: 'POST_USER',
		payload: response.result
	}))
}