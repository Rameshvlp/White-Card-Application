import QRCode from 'qrcode'
import { useState } from 'react'

function Index() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

    let data ={
        "name": sessionStorage.getItem("name"),
        "aadhar": sessionStorage.getItem("aadhar"),
		"driving": sessionStorage.getItem("driving"),
		"pan": sessionStorage.getItem("pan"),
		"voter": sessionStorage.getItem("voter")
   };
   let stJson = JSON. stringify(data);

	const GenerateQRCode = () => {
		QRCode.toDataURL(stJson, {
			width: 	200,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="auth-wrapper">
      <div className="auth-inner">
		<div className="app">
			<h1>QR Generator</h1>
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
		</div>
		</div>
		</div>
	)
}

export default Index