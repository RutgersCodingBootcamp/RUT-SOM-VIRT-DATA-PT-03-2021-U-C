# Dependencies
from collections import Counter


def mean(arr):
    """
    Calculates the mean of a list of numbers.

    Usage: mean([3, 4, 5, 6, 7]) # 5
    """
    return sum(arr) / len(arr)


def median(arr):
    """
    Calculates the median of a list of numbers.

    Usage: median([3, 4, 5, 6, 7]) # 5
    """
    arr.sort()
    if len(arr) % 2 == 1:
        return arr[len(arr) // 2]
    else:
        mid1 = len(arr) // 2
        mid2 = mid1 - 1
        return (arr[mid1] + arr[mid2]) / 2


def mode(arr):
    """
    Calculates the mode of a list of numbers as a tuple containing the
    most frequently occurring element in the first slot, and the number
    of times it occurs in the second. If there are multiple modes,
    returns only one.

    Usage: mode([1, 1, 2, 3]) # (1, 2)
    """
    return Counter(arr).most_common(1)[0]


def multi_mode(arr):
    """
    Calculates the mode of a list of numbers as an array of tuples
    containing the most frequently occurring elements. Each tuple
    contains the item itself in the first slot, and the number of times
    it occurs in the second. If there are multiple modes, returns all.

    Usage: mode([1, 1, 2, 2, 3]) # [(1, 2), (2, 2)]
    """

    # Count items
    counter = Counter(arr)

    # Get number of times most frequently occurring item appears
    freq = counter.most_common(1)[0][1]

    # Return list of tuples containing most frequently occurring elements
    return [(key, val) for key, val in counter.items() if val == freq]
