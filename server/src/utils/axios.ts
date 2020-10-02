import axios from 'axios';

export default {
    /**
     * Configures axios
     */
    config: () => {
        axios.defaults.headers = {
            'Authorization': `token ${process.env.GITHUB_API_TOKEN}`,
            'User-Agent': process.env.GITHUB_APP_NAME
        }
    }
}