import React from 'react';
import Head from "next/head";
import styles from '../../styles/Privacy.module.css'

const Returns = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <Head>
                <title>Return Refunds</title>
            </Head>
            <div className={styles.container2}>
                <h2 style={{marginBottom: '15px'}}>Returns, Exchanges, and Refunds Policy</h2>
                <p style={{margin: '10px 0 10px 0'}}> Effective Date: June 12, 2024</p>
                <p>
                    ProTrux is not the manufacturer or official distributor of hardware and, therefore, does not provide a warranty for hardware. We do not accept returns or issue refunds for hardware under any circumstances.

                    Software is a prepaid service, and no refunds are granted for software at any time. It is the responsibility of the account owner to update subscription information. We are unable to retroactively refund software subscriptions for any reason.

                    This policy supersedes any provisions stated in the "PRODUCT WARRANTY" section regarding returns and refunds.</p>
            </div>
        </div>
    );
};

export default Returns;