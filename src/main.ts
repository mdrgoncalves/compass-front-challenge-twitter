import '../public/assets/styles/main.css';
import { createProfile } from './components/Profile';

const app = document.querySelector<HTMLDivElement>('#app')!;

const profile = createProfile({
    profileName: 'John Doe',
    profileId: 'johndoe'
});

app.appendChild(profile);

