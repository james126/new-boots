export enum Breakpoint {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

// Heights in density independent pixels for breakpoints
export enum BreakpointHeight {
    SMALL = 667,
    MEDIUM = 844,
    LARGE = 845
}

// Function to get breakpoint based on height
// height: density independent pixels (i.e. display height rather than number of physical pixels)
export const getBreakpoint = (height: number): Breakpoint => {
    if (height <= BreakpointHeight.SMALL) {
        // Small phones (iPhone SE, iPhone 6/7/8, older Android phones)
        return Breakpoint.SMALL;
    } else if (height <= 844) {
        // Medium phones (iPhone 12/13/14, most Android phones)
        return Breakpoint.MEDIUM;
    } else {
        // Large phones (iPhone Pro Max, Samsung Galaxy Ultra, etc.)
        return Breakpoint.LARGE;
    }
}

//Development breakpoints:
//891 Pixel 7
//692 
                   