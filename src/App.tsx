import type { Component } from 'solid-js';
import { createSignal, onMount } from 'solid-js';

import styles from './App.module.css';
import Particles from 'solid-particles';
import { loadFull } from 'tsparticles';

const App: Component = () => {
    // @ts-ignore
    const particlesInit = async main => {
        await loadFull(main);
    };

    const [days, setDays] = createSignal('');
    const [hours, setHours] = createSignal('');
    const [minutes, setMinutes] = createSignal('');
    const [seconds, setSeconds] = createSignal('');

    function updateCountdown() {
        const now = new Date();
        const target = new Date('2023-04-15T12:50:00');
        const distance: Date = new Date(target.getTime() - now.getTime());

        setDays((distance.getDate() - 1).toString());
        setHours(distance.getHours().toString());
        setMinutes(distance.getMinutes().toString());
        setSeconds(distance.getSeconds().toString());
    }

    onMount(() => {
        setInterval(() => {
            updateCountdown();
        }, 1000);
    });

    return (
        <div class={styles.App}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{ "background": { "color": { "value":"#0d47a1" }, "image": "linear-gradient(180deg, hsla(280, 84%, 41%, 1) 0%, hsla(218, 97%, 56%, 1) 100%)" }, "fullScreen": { "zIndex":1 }, "interactivity": { "events": { "onClick": { "mode":"push" }, "onHover": { "mode":"repulse" } }, "modes": { "attract": { "distance":200, "duration":0.4, "easing":"ease-out-quad", "factor":1, "maxSpeed":50, "speed":1 }, "bounce": { "distance":200 }, "bubble": { "distance":400, "duration":2, "mix":false, "opacity":0.8, "size":40, "divs": { "distance":200, "duration":0.4, "mix":false, "selectors":[] } }, "grab": { "distance":400, "links": { "blink":false, "consent":false, "opacity":1 } }, "push": { "default":true, "groups":[], "quantity":4 }, "remove": { "quantity":2 }, "repulse": { "distance":200, "duration":0.4, "factor":100, "speed":1, "maxSpeed":50, "easing":"ease-out-quad", "divs": { "distance":200, "duration":0.4, "factor":100, "speed":1, "maxSpeed":50, "easing":"ease-out-quad", "selectors":[] } }, "trail": { "pauseOnStop":false, "quantity":1 }, "light": { "area": { "gradient": { "start": { "value":"#ffffff" }, "stop":{ "value":"#000000" } }, "radius":1000 }, "shadow": { "color": { "value":"#000000" }, "length":2000 } } } }, "particles": { "color": { "value":"#ffffff" }, "move": { "attract": { "rotate":{ "x":600, "y":1200 } }, "enable":true, "outModes": { "default":"destroy", "bottom":"destroy", "left":"destroy", "right":"destroy", "top":"destroy" }, "speed":5 }, "number": { "density": { "enable":true }, "value":0 },"opacity": { "animation": { "speed":3, "minimumValue":0.1 } }, "life": { "count":0, "duration": { "random": { "enable":false, "minimumValue":0.0001 }, "value":0, "sync":false } }, "roll": { "darken":{ "enable":false, "value":0},"enable":false,"enlighten":{"enable":false,"value":0},"mode":"vertical","speed":25},"tilt":{"random":{"enable":false,"minimumValue":0},"value":0,"animation":{"enable":false,"speed":0,"decay":0,"sync":false},"direction":"clockwise","enable":false},"twinkle":{"lines":{"enable":false,"frequency":0.05,"opacity":1},"particles":{"enable":false,"frequency":0.05,"opacity":1}},"wobble":{"distance":5,"enable":false,"speed":{"angle":50,"move":10}},"orbit":{"animation":{"count":0,"enable":false,"speed":1,"decay":0,"sync":false},"enable":false,"opacity":1,"rotation":{"random":{"enable":false,"minimumValue":0},"value":45},"width":1},"links":{"blink":false,"color":{"value":"#ffffff"},"consent":false,"distance":150,"enable":false,"frequency":1,"opacity":0.4,"shadow":{"blur":5,"color":{"value":"#000"},"enable":false},"triangles":{"enable":false,"frequency":1},"width":1,"warp":false},"repulse":{"random":{"enable":false,"minimumValue":0},"value":0,"enabled":false,"distance":1,"duration":1,"factor":1,"speed":1}},"emitters":{"autoPlay":true,"fill":true,"life":{"wait":false},"rate":{"quantity":2},"shape":"square","startCount":0,"size":{"mode":"percent","height":0,"width":100},"direction":"top","position":{"x":50,"y":100}}}}
            />

            <h1 class={styles.H1}>{days()}:{hours()}:{minutes()}:{seconds()}</h1>
        </div>
    );
};

export default App;
