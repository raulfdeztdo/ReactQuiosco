export const formatearPrecio = cantidad => {
    return cantidad.toLocaleString(
        'en-MX',
        {
            style: 'currency',
            currency: 'USD'
        }
    );
}