import React from 'react';
import { useState, useEffect } from 'react';
import useIpfs from '../hooks/useIPFS.js'

const Sample = () => {

    // upload file to IPFS
    const [file, setFile] = useState(null)
    const [hash, setHash] = useState(null)
    const [url, setUrl] = useState(null)
    const [ipfs, setIpfs] = useState(null)
    const [ipfsUrl, setIpfsUrl] = useState(null)
    const [ipfsHash, setIpfsHash] = useState(null)

    const fileHandler = (e) => {
        setFile(e.target.files[0])
        useIpfs(ipfs, 'add', setHash, file)
    }

    return (
        <div>
            <input type="file" id="file" name="file" accept="image/*" onChange={fileHandler} />
        </div>
    );
};

export default Sample;