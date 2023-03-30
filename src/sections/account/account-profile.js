import {useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import {getAccount} from '../../api/account';

// const userData = {
//   avatar: '/assets/avatars/avatar-anika-visser.png',
//   city: '深圳',
//   country: '中国',
//   jobTitle: '全栈开发',
//   name: '郑邦振',
//   timezone: 'GTM-7'
// };

export const AccountProfile = () => {
  const[user, setUser] = useState(null);
  // setUser(userData);
  useEffect(() => {
    getAccount().then((response) => {
      setUser(response.data)
    })
  }, [])

  if(!user) {
    return null;
  }

  return(
      <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
          >
            {user.firstName + user.lastName}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city} {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          上传图片
        </Button>
      </CardActions>
    </Card>
  )
};
