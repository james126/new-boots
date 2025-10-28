export enum Breakpoints {


export const getBreakpoints = (height: number): 'small' | 'medium' | 'large' => {
    if (height <= 667) {
        // Small phones (iPhone SE, iPhone 6/7/8, older Android phones)
        return 'small';
    } else if (height <= 844) {
        // Medium phones (iPhone 12/13/14, most Android phones)
        return 'medium';
    } else {
        // Large phones (iPhone Pro Max, Samsung Galaxy Ultra, etc.)
        return 'large';
    }
}