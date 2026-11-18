import { createRoot } from 'react-dom/client';
import { KaksiraitaTesti } from './KaksiraitaTesti';
import { installTaps } from './mittaus';

// Analysaattorit asennetaan ennen ensimmäistä Soita-painallusta, jolloin soitin luo MediaElementSourcet.
installTaps();
const root = document.getElementById('kaksiraitatesti');
if (root) createRoot(root).render(<KaksiraitaTesti />);
