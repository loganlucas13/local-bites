export const capitalize = (word: string): string => {
    return String(word[0]).toUpperCase() + String(word).slice(1);
};
