import { useState } from 'react';
import { Bech32ToHex, HexToBech32 } from '@kiichain/kiijs-utils';

function App() {
  const [bech32Address, setBech32Address] = useState(
    'kii1jcl5k2vsyqy2qr3e24a2lq8z5mdtq65s22vj96'
  );
  const [hexAddress, setHexAddress] = useState(
    '0x87751B44263244715474d954698205fe55358A0A'
  );
  const [bech32Result, setBech32Result] = useState('');
  const [hexResult, setHexResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to convert Bech32 address to Hex
  const handleBech32ToHex = () => {
    try {
      setError('');

      // Validate Bech32 address format
      if (!bech32Address.startsWith('kii1')) {
        throw new Error('Invalid Kii address format. Must start with kii1');
      }

      // Use the Bech32ToHex function from @kiichain/kiijs-utils
      const result = Bech32ToHex(bech32Address);

      if (result) {
        setHexResult(result);
      } else {
        setError('Failed to convert Bech32 to Hex.');
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  // Function to convert Hex address to Bech32
  const handleHexToBech32 = async () => {
    try {
      setError('');
      setLoading(true);

      // Validate Hex address format
      if (!hexAddress.startsWith('0x')) {
        throw new Error('Invalid Ethereum address format. Must start with 0x');
      }

      // Use the HexToBech32 function from @kiichain/kiijs-utils
      const result = await HexToBech32(hexAddress);

      if (result) {
        setBech32Result(result);
      } else {
        setError('Failed to convert Hex to Bech32.');
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Address Conversion</h1>
        <p className="subtitle">KII Chain Address Conversion Utility</p>
      </header>

      <div className="card">
        <h2>Bech32 to Hex</h2>
        <div className="input-group">
          <label htmlFor="bech32Input">Bech32 Address:</label>
          <input
            id="bech32Input"
            type="text"
            value={bech32Address}
            onChange={(e) => setBech32Address(e.target.value)}
            placeholder="Enter Bech32 address"
          />
        </div>
        <button onClick={handleBech32ToHex} className="convert-btn">
          Convert to Hex
        </button>
        {hexResult && (
          <div className="result">
            <h3>Result:</h3>
            <div className="address-box">{hexResult}</div>
          </div>
        )}
      </div>

      <div className="card">
        <h2>Hex to Bech32</h2>
        <div className="input-group">
          <label htmlFor="hexInput">Hex Address:</label>
          <input
            id="hexInput"
            type="text"
            value={hexAddress}
            onChange={(e) => setHexAddress(e.target.value)}
            placeholder="Enter Hex address"
          />
        </div>
        <button
          onClick={handleHexToBech32}
          className="convert-btn"
          disabled={loading}
        >
          {loading ? 'Converting...' : 'Convert to Bech32'}
        </button>
        {bech32Result && (
          <div className="result">
            <h3>Result:</h3>
            <div className="address-box">{bech32Result}</div>
          </div>
        )}
      </div>

      {error && <div className="error">{error}</div>}

      <footer>
        <p>
          Powered by{' '}
          <a
            href="https://github.com/kiichain/kiijs"
            target="_blank"
            rel="noopener noreferrer"
          >
            KII.js SDK
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
