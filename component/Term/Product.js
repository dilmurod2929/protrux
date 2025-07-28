import React from 'react';
import Head from "next/head";
import styles from "../../styles/Privacy.module.css";

const Product = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <Head>
                <title>Product Warranty</title>
            </Head>
            <div className={styles.container}>
                <h2 style={{marginBottom: '15px'}}>LIMITED PRODUCT WARRANTY</h2>
                <p style={{margin: '10px 0 10px 0'}}>ProTrux Inc, as a reseller, does not provide any warranty for the
                    Hardware. The manufacturer or official distributor of the product is solely responsible for any
                    warranties related to the Hardware.</p>
                <p style={{margin: '10px 0 10px 0'}}>This disclaimer applies to all warranty claims, and ProTrux Inc
                    makes no guarantees, explicit or implied, regarding the Hardware's performance, quality, or
                    durability. Any issues or defects should be addressed directly with the manufacturer or official
                    distributor.
                </p>
                {/*<p style={{margin: '10px 0 0px 0'}}>The Limited Hardware Warranty will only apply to the extent that*/}
                {/*    Customer is paying for its recurring subscription fees. In the event that Customer stops paying its*/}
                {/*    recurring subscription service fees, this Limited Hardware Warranty will terminate. </p>*/}
                <h3 style={{margin: '15px 0 15px 0'}}>WARRANTY DISCLAIMER
                </h3>
                <p style={{margin: '10px 0 0px 0'}}>TO THE FULLEST EXTENT PERMITTED BY LAW, ProTrux INC AND ITS
                    AFFILIATES, LICENSORS, SUPPLIERS, AND DISTRIBUTORS (A) MAKE NO WARRANTIES OF ANY KIND, EITHER
                    EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE REGARDING THE HARDWARE, AND (B) DISCLAIM ALL WARRANTIES,
                    INCLUDING ANY IMPLIED OR EXPRESS WARRANTIES (I) OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE, NON-INTERFERENCE, AND NON-INFRINGEMENT, (II) ARISING FROM A COURSE OF DEALING, USAGE OR
                    TRADE PRACTICE, OR (III) THAT THE HARDWARE WILL OPERATE ERROR-FREE OR UNINTERRUPTED. THE HARDWARE IS
                    PROVIDED “AS IS” AND “AS AVAILABLE.” CUSTOMER IS SOLELY RESPONSIBLE FOR (AND PROTRUX INC DISCLAIMS)
                    ANY AND ALL LOSS, LIABILITY, OR DAMAGES RELATING TO OR ARISING FROM CUSTOMER’S INSTALLATION OF THE
                    HARDWARE, CUSTOMER’S VEHICLES, AND INTERNET CONNECTIVITY.
                </p>
                <p style={{margin: '10px 0 10px 0'}}>CUSTOMER ACKNOWLEDGES AND AGREES THAT THE SERVICES AND HARDWARE ARE
                    A DRIVER AID ONLY. THE SERVICES AND HARDWARE ARE NOT A SUBSTITUTE FOR A SAFE, CONSCIENTIOUS DRIVER.
                    THE SERVICES AND HARDWARE CANNOT COMPENSATE FOR A DRIVER THAT IS DISTRACTED, INATTENTIVE, OR
                    IMPAIRED BY FATIGUE, DRUGS, ALCOHOL, OR OTHERWISE. THE DRIVER IS RESPONSIBLE TO AVOID AN ACCIDENT.
                    CUSTOMER’S DRIVERS SHOULD NEVER WAIT FOR THE SERVICES AND HARDWARE TO PROVIDE A WARNING BEFORE
                    TAKING MEASURES TO AVOID AN ACCIDENT. FAILURE OF A DRIVER TO TAKE FULL RESPONSIBILITY FOR THE
                    OPERATION OF A VEHICLE AT ALL TIMES CAN RESULT IN SERIOUS PERSONAL INJURY OR PROPERTY DAMAGE.
                </p>
                <h3 style={{margin: '15px 0 15px 0'}}>LIMITATION OF LIABILITY</h3>
                <p style={{margin: '10px 0 10px 0'}}>IN NO EVENT WILL PROTRUX INC’s TOTAL LIABILITY ARISING OUT OF OR IN
                    CONNECTION WITH THIS LIMITED HARDWARE WARRANTY OR FROM THE USE OF OR INABILITY TO USE THE HARDWARE
                    EXCEED THE TOTAL AMOUNT OF FEES RECEIVED BY PROTRUX INC FROM CUSTOMER FOR THE HARDWARE. THE
                    LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN
                    PROTRUX INC AND CUSTOMER.
                </p>
                <p style={{margin: '10px 0 10px 0'}}>TO THE FULLEST EXTENT PERMITTED BY LAW, PROTRUX INC AND ITS
                    AFFILIATES, LICENSORS, SUPPLIERS, AND DISTRIBUTORS DISCLAIM AND WILL NOT BE LIABLE TO CUSTOMER UNDER
                    THIS LIMITED HARDWARE WARRANTY OR FOR LIABILITY ARISING FROM OR RELATED TO THE HARDWARE FOR (A) ANY
                    INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR (B) LOSS OF USE,
                    DATA, BUSINESS, OR PROFITS (IN EACH CASE WHETHER DIRECT OR INDIRECT), OR (C) DAMAGES FOR PERSONAL OR
                    BODILY INJURY OR PROPERTY DAMAGE, REGARDLESS OF THE LEGAL THEORY AND REGARDLESS OF WHETHER PROTRUX
                    INC HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES, EVEN IF A LIMITED REMEDY SET FORTH IS
                    FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
                </p>
                <h3 style={{margin: '15px 0 15px 0'}}>COMPATIBILITY</h3>
                <p style={{margin: '10px 0 10px 0'}}>
                    Customer is solely responsible for determining whether or not the Services and Hardware are
                    compatible with any vehicles utilizing the Services and Hardware. Customer agrees that PROTRUX INC is
                    not responsible for any cost, expense or damage arising from compatibility issues.
                </p>
                <p style={{margin: '10px 0 10px 0'}}>
                    Effective Date: June 12, 2024
                </p>
            </div>
        </div>
    );
};

export default Product;