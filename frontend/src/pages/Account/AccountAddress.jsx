import "./Account.css"

export const AccountAdress = () => {
    return (
        <div className="page-content my-account__address">
            <p>The following addresses will be used on the checkout page by default.
            </p>
            <div className="my-account__address-list ">
                <div className="my-account__address-item">
                    <div
                        className="my-account__address-item__title my-5 d-flex justify-content-between align-items-center">
                        <h6 className="text-uppercase-fw-normal">
                            BILLING ADDRESS
                        </h6>
                        <a href="#" className="btn btn-full active">Edit</a>
                    </div>
                    <div className="my-account__address-item__detail">
                        <p>Daniel Robinson</p>
                        <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                        <p>United States</p>
                        <br></br>
                            <p>sale@zephyra.com</p>
                            <p>+90 507 891 21 12</p>
                    </div>

                </div>
                <div className="my-account__address-item">
                    <div
                        className="my-account__address-item__title my-5 d-flex justify-content-between align-items-center">
                        <h6 className="text-uppercase-fw-normal">
                            Shipping ADDRESS
                        </h6>
                        <a href="#" className="btn btn-full active">Edit</a>
                    </div>
                    <div className="my-account__address-item__detail">
                        <p>Daniel Robinson</p>
                        <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
                        <p>United States</p>
                        <br></br>
                            <p>sale@zephyra.com</p>
                            <p>+90 507 891 21 12</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
