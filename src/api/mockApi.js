let users = [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'Editor', status: 'Inactive' },
];

let roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const mockApi = {
    getUsers: () => Promise.resolve(users),
    addUser: (user) => {
        user.id = users.length + 1;
        users.push(user);
        return Promise.resolve(user);
    },
    updateUser: (id, updatedUser) => {
        users = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
        return Promise.resolve(updatedUser);
    },
    deleteUser: (id) => {
        users = users.filter(user => user.id !== id);
        return Promise.resolve();
    },
    getRoles: () => Promise.resolve(roles),
    addRole: (role) => {
        role.id = roles.length + 1;
        roles.push(role);
        return Promise.resolve(role);
    },
    updateRole: (id, updatedRole) => {
        roles = roles.map(role => (role.id === id ? { ...role, ...updatedRole } : role));
        return Promise.resolve(updatedRole);
    },
};
