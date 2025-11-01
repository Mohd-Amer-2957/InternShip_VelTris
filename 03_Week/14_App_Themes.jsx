import { useState } from 'react';
import { ConfigProvider, Switch, Button, Space } from 'antd';
import { theme as antdTheme } from 'antd';
import 'antd/dist/reset.css';                                     // reset for AntD v5

const { defaultAlgorithm, darkAlgorithm } = antdTheme;



export default function ThemedApp() {
    const [dark, setDark] = useState(false);

    const lightTokens = {
        colorPrimary: '#1e90ff',
        borderRadius: 8,
        colorText: '#111827',
    };

    const darkTokens = {
        colorPrimary: '#184882ff',
        borderRadius: 8,
        colorText: '#e6eef8',
    };




    return  (
        <ConfigProvider
            theme={{
                algorithm: dark ? darkAlgorithm : defaultAlgorithm,
                token: dark ? darkTokens : lightTokens,
            }}
        >
            <div style={{ padding: 40, minHeight: '100vh', background: dark ? '#0f1724' : '#f4f6f8' }}>

                <Switch checked={dark} onChange={setDark} />
                <Space>
                    <Button>Click</Button>

                </Space>

            </div>
        </ConfigProvider>
    );
}
