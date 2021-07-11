import {observer} from "mobx-react-lite";
import {AppBar, Box, FormControl, Grid, MenuItem, Select, Toolbar, Typography} from "@material-ui/core";
import useStore from "../../hooks/useStore";
import User from "../common/User";

const Header = () => {
    const { boards, users } = useStore();
    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item>
                        <Box display='flex' alignItems='center'>
                            <Typography variant={6}>
                                Dashboard:
                            </Typography>
                            <FormControl>
                                <Select
                                    style={{
                                        backgroundColor: '#ffffff',
                                        marginLeft: 10,
                                    }}
                                    value={boards?.active?.id || ''}
                                    onChange={() => {
                                    }}
                                >
                                    <MenuItem value='' disabled>
                                        -
                                    </MenuItem>
                                    {boards.list.map(board => {
                                        return (
                                            <MenuItem id={board.id} value={board?.id}>
                                                {board?.title}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item>
                        <User user={users?.me} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default observer(Header);