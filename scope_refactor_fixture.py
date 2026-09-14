def arithmetic_mean(values):
    """Return the mean of a nonempty sequence."""
    if not values:
        raise ValueError("values must not be empty")
    return sum(values) / len(values)
