// Tunnel script using localtunnel programmatically
const localtunnel = require('localtunnel');

(async () => {
    try {
        const tunnel = await localtunnel({ port: 3000 });
        console.log('TUNNEL_URL=' + tunnel.url);
        
        tunnel.on('close', () => {
            console.log('Tunnel closed');
        });
        
        tunnel.on('error', (err) => {
            console.error('Tunnel error:', err);
        });
        
        // Keep alive
        setInterval(() => {}, 10000);
    } catch (err) {
        // If localtunnel not installed, install it
        console.error('Error:', err.message);
        console.log('Please run: npm install localtunnel');
    }
})();
