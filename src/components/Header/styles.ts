import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderCustom = styled(motion.header)`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 99999;

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0, 1.6rem;
        width: 70%;
    
        .nav-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`
