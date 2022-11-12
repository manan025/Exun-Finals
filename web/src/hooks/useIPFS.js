import { useState, useEffect } from 'react'
import { getProperty } from 'dot-prop'
// dot-prop: used to obtain a property of an object when the name of property is a string
// here we get ipfs.id when calling dotProp.get(ipfs, cmd), with cmd = 'id'
// and we get ipfs.hash when calling with cmd = 'hash' etc.

/*
 * Pass the command you'd like to call on an ipfs instance.
 *
* callIpfs uses setState write the response as a state variable, so that your component
 * will re-render when the result 'res' turns up from the call await ipfsCmd.
 *
 */
export default function useIpfs (ipfs, cmd, opts) {
    const [res, setRes] = useState(null)
    useEffect(() => {
        callIpfs(ipfs, cmd, setRes, opts)
    }, [ipfs, cmd, opts])
    return res
}

export function useIpfsHash (ipfs, file) {
    const [hash, setHash] = useState(null)
    useEffect(() => {
        if (!file) return
        callIpfs(ipfs, 'add', setHash, file)
    }, [ipfs, file])
    return hash

}

export function useIpfsUrl (ipfs, hash) {
    const [url, setUrl] = useState(null)
    useEffect(() => {
        if (!hash) return
        callIpfs(ipfs, 'cat', setUrl, hash)
    }, [ipfs, hash])
    return url

}

export function useIpfsUrlFromHash (ipfs, hash) {
    const [url, setUrl] = useState(null)
    useEffect(() => {
        if (!hash) return
        callIpfs(ipfs, 'cat', setUrl, hash)
    }, [ipfs, hash])
    return url
}

export function useIpfsHashFromFile (ipfs, file) {
    const [hash, setHash] = useState(null)
    useEffect(() => {
        if (!file) return
        callIpfs(ipfs, 'add', setHash, file)
    }, [ipfs, file])
    return hash
}

export function uploadFile (ipfs, file) {
    return callIpfs(ipfs, 'add', null, file)
}

async function callIpfs (ipfs, cmd, setRes, ...opts) {
    if (!ipfs) return null
    console.log(`Call ipfs.${cmd}`)
    const ipfsCmd = getProperty(ipfs, cmd)
    const res = await ipfsCmd(...opts)
    console.log(`Result ipfs.${cmd}`, res)
    setRes(res)
}
