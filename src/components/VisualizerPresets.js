import axios from 'axios'
import * as UserConfig from '../userConfig'
export async function Fetch () {
    if (UserConfig.getBoolean('enableVisualizer')) {
        // Fetch visualizers
        let response = await axios.get('/static/presets.json')
        console.log(response)
        return response.data
    }
    return {}
}
