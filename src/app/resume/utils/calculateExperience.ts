export function calculateExperience(p0: string): string {
    const startDate = new Date(p0); // Start counting from November 2023
    const currentDate = new Date();

    const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
    const isBeforeAnniversary =
        currentDate.getMonth() < startDate.getMonth() ||
        (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate());

    const exactYears = isBeforeAnniversary ? yearsDifference - 1 : yearsDifference;

    // Verificar si no es un año exacto
    const isNotExactYear = currentDate.getMonth() !== startDate.getMonth() || currentDate.getDate() !== startDate.getDate();

    return isNotExactYear ? `${exactYears}+ Años` : `${exactYears} Años`;
}