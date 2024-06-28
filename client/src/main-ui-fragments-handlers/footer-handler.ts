export const handleFooter = (footer: HTMLElement, isAuth: boolean) => {
    footer.innerHTML = `<span>Current user status: <strong>${isAuth ? 'authenticated' : 'not authenticated'}</strong></span>`
};

