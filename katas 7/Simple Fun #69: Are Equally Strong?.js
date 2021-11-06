function verify(value, fl, fr) {
  return value === fl || value === fr;
}

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    verify(yourLeft, friendsLeft, friendsRight) &&
    verify(yourRight, friendsLeft, friendsRight)
  );
}
