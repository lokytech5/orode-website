export const setAuthenticated = (isAuthenticated) => ({
    type: 'SET_AUTHENTICATED',
    payload: isAuthenticated,
});

export const setUserRole = (role) => ({
    type: 'SET_USER_ROLE',
    payload: role,
});