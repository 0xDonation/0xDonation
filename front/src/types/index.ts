export type TTheme = 'light' | 'dark'
export type TAppContext = {
    theme: TTheme
    setTheme?: (t: TTheme) => void;
    isEmailModalOpen?: boolean;
    openEmailModal?: () => void;
    changeEmailModalState?: () => void;
}