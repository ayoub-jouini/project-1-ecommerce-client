import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SideCartElement from './SideCartElement';
import { useCart } from '../../utils/Cart-Context';

interface Props {
    toggleDrawer: (toggler: boolean) => any;
    toggle: boolean;
}

const TemporaryDrawer: React.FC<Props> = ({ toggleDrawer, toggle }) => {
    const { cart } = useCart()
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor='right'
                    open={toggle}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        bgcolor="primary.dark"
                        sx={{ width: 320, height: "100%", padding: "1rem" }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    > {cart.map((product: any, key: any) => (
                        <SideCartElement
                            key={key}
                            productId={product.id}
                            productImage={product.image}
                            productName={product.name}
                            productSize={product.size}
                            productAmount={product.amount}
                            productPrice={product.price} />
                    ))}
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}

export default TemporaryDrawer;