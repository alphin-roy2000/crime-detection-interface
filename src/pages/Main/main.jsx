
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import * as tf from '@tensorflow/tfjs';
// import model1 from '../../model/model.json'

const Main = () => {
    const videoRef = useRef(null);
    const [camera, setCamera] = useState(true)
    const [realtime, setrealtime] = useState(true)
    // import { loadLayersModel } from '@tensorflow/tfjs-converter';
    const [model, setModel] = useState(); 
    async function loadModel(url) {
        try {
            // For layered model
     const model =await tf.loadLayersModel('./model.json',',.group1-shard1of1.bin');
            console.log("Load model success")
        } catch (err) {
            console.log(err);
        }
    }//React Hook
    useEffect(() => {
        tf.ready().then(() => {
            console.log("tens")
            console.log(JSON.stringify('../../model/model.json'))
            loadModel('../../../model/model.json')
        });
        
    }, [])
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 720, height: 360 }
        }).then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play()
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getVideo();

    }, [ videoRef] )
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault();
        navigate(-1);


    }; const switching = async (e) => {
        if (camera) {
            const stream = videoRef.current.srcObject;
            console.log(stream)
            const tracks = stream.getTracks();

            tracks.forEach(function (track) {
                track.stop();
            });

            videoRef.srcObject = null;
        setrealtime(true)

        }
        else {
            getVideo()
        }
        setCamera(!camera)

    };
    const realtimeML = async (e) => {
        console.log(realtime)
        if (!realtime) {
            
        }
        else {
            getVideo()

            setCamera(1)
        }
        setrealtime(!realtime)

    };
    return (
        <div className="main">
            <div className="navBar">
                <h1>Crime Detection: Admin</h1>
                <button onClick={handleClick} className="button-17">
                    Logout
                </button>
            </div>
            <div>
                <div className="camera">
                    {
                        camera ? <video ref={videoRef}></video> : <div><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="red" className="bi bi-camera-video-off-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z" />
                        </svg></div>
                    }
                </div>
                <button onClick={switching} className={'button-2 ' + (!camera ? 'on' : 'off')}>
                    Turn {!camera ? 'ON' : 'OFF'} Camera
                </button>
                <button onClick={realtimeML} className={'button-2 ' + (realtime ? 'on' : 'off')}>
                    {realtime ? 'Activate' : 'Deactivate'} Realtime
                </button>
                <h4>{!realtime? 'Realtime detection activated' : ''}</h4>
            </div>
        </div>
    );
}
export default Main;