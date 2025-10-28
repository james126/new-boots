export enum Breakpoints {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export enum BreakpointHeights {
    SMALL = 667,
    MEDIUM = 844,
    LARGE = 845
}

// Function to get breakpoint based on height
// height: density independent pixels (i.e. display height rather than number of physical pixels)
export const getBreakpoint = (height: number): Breakpoints => {
    if (height <= BreakpointHeights.SMALL) {
        // Small phones (iPhone SE, iPhone 6/7/8, older Android phones)
        return Breakpoints.SMALL;
    } else if (height <= 844) {
        // Medium phones (iPhone 12/13/14, most Android phones)
        return Breakpoints.MEDIUM;
    } else {
        // Large phones (iPhone Pro Max, Samsung Galaxy Ultra, etc.)
        return Breakpoints.LARGE;
    }
}

                   